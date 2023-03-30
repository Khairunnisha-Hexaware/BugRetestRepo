using BackendDotnet.Data.Interfaces;
using BackendDotnet.Entities.Entities;
using System.Collections.Generic;
using System.Linq;

namespace BackendDotnet.Data.Repositories
{
    public class NanoScienceAndTechnologyRepository : INanoScienceAndTechnologyRepository
    {
        private readonly DataContext _context;        

        public NanoScienceAndTechnologyRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<NanoScienceAndTechnology> GetAll()
        {            
            return _context.NanoScienceAndTechnology.ToList();
        }

        public bool Save(NanoScienceAndTechnology entity)
        {
            if (entity == null)
                return false;
            _context.NanoScienceAndTechnology.Add(entity);
            var created= _context.SaveChanges();
            return created>0;
        }

        public NanoScienceAndTechnology Update(int id,NanoScienceAndTechnology entity)
        {     
             var retrievedEntity = _context.NanoScienceAndTechnology.FirstOrDefault(item => item.Id == id);
             if(entity != null){
                retrievedEntity.coursename = entity.coursename;
                retrievedEntity.coursedescription = entity.coursedescription;
                retrievedEntity.coursetype = entity.coursetype;
                retrievedEntity.courseduration = entity.courseduration;
                retrievedEntity.coursechedule = entity.coursechedule;
                retrievedEntity.coursefee = entity.coursefee;
                retrievedEntity.mobilenumber = entity.mobilenumber;
                retrievedEntity.dateofjoining = entity.dateofjoining;
            _context.SaveChanges();
             }
            return entity;
        }

        public bool Delete(int id)
        {          

            int deleted = 0;
            var entity = _context.NanoScienceAndTechnology.FirstOrDefault(x => x.Id == id);
            if (entity != null)
            {
                _context.Remove(entity);
                deleted = _context.SaveChanges();
            }
            return deleted > 0;
        }
        public NanoScienceAndTechnology GetById(int id)
        {
            return _context.NanoScienceAndTechnology.FirstOrDefault(x => x.Id == id);            
             
        }
    }
}
