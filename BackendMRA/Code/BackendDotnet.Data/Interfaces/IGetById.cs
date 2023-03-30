namespace BackendDotnet.Data.Interfaces
{
    public interface IGetById<out T> where T : class
    {
        T GetById(int id);
    }
}
