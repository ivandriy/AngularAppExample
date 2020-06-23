using Microsoft.EntityFrameworkCore;

namespace AngularApp.Models
{
    public class EmployeesDbContext : DbContext
    {
        public EmployeesDbContext(DbContextOptions<EmployeesDbContext> options) 
            : base(options)
        {
        }
 
        public DbSet<Employee> Employees { get; set; }
    }
}