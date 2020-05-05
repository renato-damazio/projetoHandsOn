using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Cliente
    {
        [Key]
        public int clienteID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(80)")]
        public string nome { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(15)")]
        public string cpf { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(80)")]
        public string email { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(15)")]
        public string telefone { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(150)")]
        public string endereco { get; set; }
    }
}
