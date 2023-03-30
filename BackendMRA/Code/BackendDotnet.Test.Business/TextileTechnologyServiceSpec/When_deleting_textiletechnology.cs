using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Business.TextileTechnologyServiceSpec
{
    public class When_deleting_textiletechnology : UsingTextileTechnologyServiceSpec
    {
        private bool _result;

        private int Id = 1;

        public override void Context()
        {
            base.Context();

            _textiletechnologyRepository.Delete(Id).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Delete(Id);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _textiletechnologyRepository.Received(1).Delete(Id);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<bool>();

            _result.ShouldBe(true);
        }
    }
}
