function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QiWhKJUOpl":
        Script1();
        break;
      case "6lvnBBZxA5v":
        Script2();
        break;
      case "5yUhUvjcKR9":
        Script3();
        break;
      case "5pin2kRopwR":
        Script4();
        break;
      case "5gRP6S5MFiF":
        Script5();
        break;
      case "5WIvglHYQVE":
        Script6();
        break;
      case "6d5MAIlOwq3":
        Script7();
        break;
      case "6iXalN1lRZP":
        Script8();
        break;
      case "6hq3aktCE9i":
        Script9();
        break;
      case "6454MzRtnq1":
        Script10();
        break;
      case "5p2djrWWUe8":
        Script11();
        break;
      case "6hyxmcDCL4W":
        Script12();
        break;
      case "6hdxaCBIt4i":
        Script13();
        break;
      case "5bj0B4z7XOA":
        Script14();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script13()
{
  $("#tab-customlink").show();
}

function Script14()
{
  window.print();
}

