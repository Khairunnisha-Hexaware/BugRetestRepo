using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Api.TextileTechnologyControllerSpec
{
    public class When_getting_all_textiletechnology : UsingTextileTechnologyControllerSpec
    {
        private ActionResult<IEnumerable<TextileTechnology>> _result;

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
            _textiletechnologyService.GetAll().Returns(_all_textiletechnology);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _textiletechnologyService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<TextileTechnology>>();

            List<TextileTechnology> resultList = resultListObject as List<TextileTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_textiletechnology);
        }
    }
}
