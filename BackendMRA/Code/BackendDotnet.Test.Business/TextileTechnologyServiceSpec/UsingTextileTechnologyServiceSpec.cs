using NSubstitute;
using BackendDotnet.Test.Framework;
using BackendDotnet.Business.Services;
using BackendDotnet.Data.Interfaces;

namespace BackendDotnet.Test.Business.TextileTechnologyServiceSpec
{
    public abstract class UsingTextileTechnologyServiceSpec : SpecFor<TextileTechnologyService>
    {
        protected ITextileTechnologyRepository _textiletechnologyRepository;

        public override void Context()
        {
            _textiletechnologyRepository = Substitute.For<ITextileTechnologyRepository>();
            subject = new TextileTechnologyService(_textiletechnologyRepository);

        }

    }
}
