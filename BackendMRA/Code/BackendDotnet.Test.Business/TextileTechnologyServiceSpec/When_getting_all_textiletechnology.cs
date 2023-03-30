using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Business.TextileTechnologyServiceSpec
{
    public class When_getting_all_textiletechnology : UsingTextileTechnologyServiceSpec
    {
        private IEnumerable<TextileTechnology> _result;

        private IEnumerable<TextileTechnology> _all_textiletechnology;
        private TextileTechnology _textiletechnology;

        public override void Context()
        {
            base.Context();

            _textiletechnology = new TextileTechnology{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                courseduration = "courseduration",
                coursechedule = "coursechedule",
                coursefee = "coursefee",
                mobilenumber = "mobilenumber",
                dateofjoining = "dateofjoining"
            };

            _all_textiletechnology = new List<TextileTechnology> { _textiletechnology};
            _textiletechnologyRepository.GetAll().Returns(_all_textiletechnology);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _textiletechnologyRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<TextileTechnology>>();

            List<TextileTechnology> resultList = _result as List<TextileTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_textiletechnology);
        }
    }
}
