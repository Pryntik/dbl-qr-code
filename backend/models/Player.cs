using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dbl_qr_code.models
{
    public class Player
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public DateTime CreateAt { get; set; } = DateTime.UtcNow;
        [Required]
        [MaxLength(11)]
        public string YourCode { get; set; } = string.Empty;
        [MaxLength(30)]
        public string Name { get; set; } = string.Empty;
    }
}