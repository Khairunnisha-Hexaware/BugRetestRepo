using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendDotnet.Entities.Entities
{
    public class NanoScienceAndTechnology
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id  { get; set; }
        public string coursename  { get; set; }
        public string coursedescription  { get; set; }
        public string coursetype  { get; set; }
        public string courseduration  { get; set; }
        public string coursechedule  { get; set; }
        public string coursefee  { get; set; }
        public string mobilenumber  { get; set; }
        public string dateofjoining  { get; set; }
        
    }

}
