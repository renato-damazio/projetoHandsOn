﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ClienteController : ControllerBase
    {
        private readonly APIDBContext _context;

        public ClienteController(APIDBContext context)
        {
            _context = context;
        }

        // GET: api/Cliente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        // GET: api/Cliente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return cliente;
        }

        // PUT: api/Cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente(int id, Cliente cliente)
        {
            if (id != cliente.clienteID)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cliente
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.clienteID }, cliente);
        }

        // DELETE: api/Cliente/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cliente>> DeleteCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            await _context.SaveChangesAsync();

            return cliente;
        }

        private bool ClienteExists(int id)
        {
            return _context.Clientes.Any(e => e.clienteID == id);
        }

        // GET: api/cliente/search/12345678901
        [HttpPost]
        [Route("search")]
        public async Task<ActionResult<Cliente>> SearchCliente([FromBody]string cpf)
        {
            var cliente = await _context.Clientes.FirstOrDefaultAsync(c => c.cpf == cpf);

            if (cliente == null)
            {
                return NotFound(new { message = "CPF não cadastrado!" });
            }

            return cliente;
        }

        [HttpPost]
        [Route("login")]
        [Authorize]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody]Cliente cliente)
        {
            if (cliente.cpf != "34152599863")
            {
                return NotFound(new { message = "CPF não cadastrado!" });
            }
            var token = TokenService.GenerateToken(cliente);
            return new
            {
                cliente = cliente,
                token = token
            };
        }
    }
}
