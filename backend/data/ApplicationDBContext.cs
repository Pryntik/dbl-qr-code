using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dbl_qr_code.models;
using Microsoft.EntityFrameworkCore;

namespace dbl_qr_code.data
{
    public class ApplicationDBContext: DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            
        }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Player> Players { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Friend>()
                        .HasIndex(f => new { f.PlayerId, f.FriendCode })
                        .HasDatabaseName("unique_player_friend")
                        .IsUnique();
        }
    }
}