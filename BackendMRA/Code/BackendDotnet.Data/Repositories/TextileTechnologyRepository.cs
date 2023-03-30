using BackendDotnet.Data.Interfaces;
using BackendDotnet.Entities.Entities;
using System.Collections.Generic;
using System.Linq;

namespace BackendDotnet.Data.Repositories
{
    public class TextileTechnologyRepository : ITextileTechnologyRepository
    {
        private readonly DataContext _context;        

        public TextileTechnologyRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<TextileTechnology> GetAll()
        {            
            return _context.TextileTechnology.ToList();
        }

        public bool Save(TextileTechnology entity)
        {
            if (entity == null)
                return false;
            _context.TextileTechnology.Add(entity);
            var created= _context.SaveChanges();
            return created>0;
        }

        public TextileTechnology Update(int id,TextileTechnology entity)
        {     
             var retrievedEntity = _context.TextileTechnology.FirstOrDefault(item => item.Id == id);
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
            var entity = _context.TextileTechnology.FirstOrDefault(x => x.Id == id);
            if (entity != null)
            {
                _context.Remove(entity);
                deleted = _context.SaveChanges();
            }
            return deleted > 0;
        }
        public TextileTechnology GetById(int id)
        {
            return _context.TextileTechnology.FirstOrDefault(x => x.Id == id);            
             
        }
    }
}
