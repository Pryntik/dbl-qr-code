using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dbl_qr_code.models
{
    public class Friend
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public DateTime CreateAt { get; set; } = DateTime.UtcNow;
        [Required]
        public int PlayerId { get; set; }
        [Required]
        [MaxLength(7)]
        public string FriendCode { get; set; } = string.Empty;
    }
}