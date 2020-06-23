using AngularApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AngularApp.Controllers
{
    [ApiController]
    [Route("api/employees")]
    public class EmployeeController : Controller
    {
        private readonly EmployeesDbContext _context;
        public EmployeeController(EmployeesDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public IEnumerable<Employee> GetAllEmployees() => _context.Employees.ToList();

        [HttpGet("{id}")]
        public Employee GetEmployeeById(int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
            return employee;
        }
 
        [HttpPost]
        public IActionResult CreateEmployee(Employee employee)
        {
            if (ModelState.IsValid)
            {
                _context.Employees.Add(employee);
                _context.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }
 
        [HttpPut]
        public IActionResult UpdateEmployee(Employee employee)
        {
            if (ModelState.IsValid)
            {
                _context.Update(employee);
                _context.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }
 
        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                _context.Employees.Remove(employee);
                _context.SaveChanges();
            }
            return Ok(employee);
        }
    }
}