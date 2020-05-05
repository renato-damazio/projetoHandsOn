using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("authentication")]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly APIDBContext _context;


        [HttpPost]
        [Route("login")]
        [Authorize]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody]Cliente cliente)
        {
            if(cliente.cpf != "34152599863")
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