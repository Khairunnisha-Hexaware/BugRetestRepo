using NSubstitute;
using BackendDotnet.Test.Framework;
using BackendDotnet.Api.Controllers;
using BackendDotnet.Business.Interfaces;


namespace BackendDotnet.Test.Api.TextileTechnologyControllerSpec
{
    public abstract class UsingTextileTechnologyControllerSpec : SpecFor<TextileTechnologyController>
    {
        protected ITextileTechnologyService _textiletechnologyService;

        public override void Context()
        {
            _textiletechnologyService = Substitute.For<ITextileTechnologyService>();
            subject = new TextileTechnologyController(_textiletechnologyService);

        }

    }
}
