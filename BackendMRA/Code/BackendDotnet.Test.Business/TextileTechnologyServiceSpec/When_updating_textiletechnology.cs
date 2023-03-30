using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using BackendDotnet.Entities.Entities;


namespace BackendDotnet.Test.Business.TextileTechnologyServiceSpec
{
    public class When_updating_textiletechnology : UsingTextileTechnologyServiceSpec
    {
        private TextileTechnology _result;
        private TextileTechnology _textiletechnology;

        public override void Context()
        {
            base.Context();

            _textiletechnology = new TextileTechnology
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                courseduration = "courseduration",
                coursechedule = "coursechedule",
                coursefee = "coursefee",
                mobilenumber = "mobilenumber",
                dateofjoining = "dateofjoining"
            };

            _textiletechnologyRepository.Update(1, _textiletechnology).Returns(_textiletechnology);
            
        }
        public override void Because()
        {
            _result = subject.Update(1, _textiletechnology);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _textiletechnologyRepository.Received(1).Update(1, _textiletechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<TextileTechnology>();

            _result.ShouldBe(_textiletechnology);
        }
    }
}
