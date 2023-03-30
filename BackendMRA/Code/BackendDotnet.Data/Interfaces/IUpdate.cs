namespace BackendDotnet.Data.Interfaces
{
    public interface IUpdate<T> where T : class
    {
        T Update( int id, T entity);
    }
}
