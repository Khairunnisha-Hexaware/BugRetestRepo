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
    public class When_saving_textiletechnology : UsingTextileTechnologyControllerSpec
    {
        private ActionResult<TextileTechnology> _result;

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

            _textiletechnologyService.Save(_textiletechnology).Returns(_textiletechnology);
        }
        public override void Because()
        {
            _result = subject.Save(_textiletechnology);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _textiletechnologyService.Received(1).Save(_textiletechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<TextileTechnology>();

            var resultList = (TextileTechnology)resultListObject;

            resultList.ShouldBe(_textiletechnology);
        }
    }
}
