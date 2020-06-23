using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace AngularApp.Models
{
    public static class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new EmployeesDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<EmployeesDbContext>>()))
            {
                if (context.Employees.Any())
                {
                    return;
                }

                context.Employees.AddRange(
                    new Employee
                        { Id = 1, FirstName = "John", LastName = "Dow", Department = "IT", Address = "Boston" },
                    new Employee
                        { Id = 2, FirstName = "Mike", LastName = "Smith", Department = "Security", Address = "Boston" },
                    new Employee
                        { Id = 3, FirstName = "Marry", LastName = "Lewis", Department = "HR", Address = "New-York" });

                context.SaveChanges();
            }
        }
    }
}