var SERVER_URL = "https://webhooks-test-696969.herokuapp.com/";
var CUSTOMER_INFO = "customerinfo";
var CLAIM_INFO = "javelinasegundo"
var TEST_DATA = {
    "EmployeeID":16654,
    "EmployeeLink":"https://t904-rest.javelinaweb.com/rest/eligibility/members/EmployeeID/16654",
    "DepSequenceNumber":0,
    "BlkOfBusID":"MG500",
    "BlkOfBusLink":"https://t904-rest.javelinaweb.com/rest/core/blkofbuss/BlkOfBusID/MG500",
    "BobName":"Medical Group Line of Business",
    "ClientID":"HIPAA",
    "ClientLink":"https://t904-rest.javelinaweb.com/rest/core/clients/BlkOfBusID/MG500/ClientID/HIPAA",
    "ClientName":"PAPERLESS HIPAA GROUP",
    "EmployeeFirstName":"Larry",
    "EmployeeLastName":"Madison",
    "EmployeeCertNum":"TTC30065",
    "PatientFirstName":"Larry",
    "PatientLastName":"Madison",
    "CertificateNumber":"TTC30065",
    "Relationship":"Self",
    "SSN":"955666789",
    "BirthDate":"1991-05-10",
    "Address":{ 
      "Home": "1345 Great street",
      "Away": {
        "Vacation Home": "1443 Oak Ave",
        "Live Abroad:": "3793 Ontario Ave"
      }
    },
    "Eligibility":{  },
    "PhoneNumbers":{  }
 };

 var TEST_CLAIM_ARRAY = [
  {
      "Claimnumber": "217-0000000340-00",
      "ClaimnLink": "https://t904-rest.javelinaweb.com/rest/claim/claims/Claimnumber/217-0000000340-00",
      "Product": "MM",
      "Providertaxid": "343111111",
      "Patientfirstname": "Larry",
      "Patientlastname": "Madison",
      "PatientCertNum": "TTC30065",
      "ChangedDate": "2017-07-12",
      "TotCharge": 249.0,
      "Claimstatus": "EXC",
      "IncurredDate": "2017-02-08",
      "ReceivedDate": "2017-04-06",
      "PrimaryICD": "C44.529",
      "Icdversion": "0",
      "BlkOfBusID": "MG500",
      "ClientID": "HIPAA",
      "Providerofficename": "WMG FACILITY"
  },
  {
      "Claimnumber": "217-0000000334-00",
      "ClaimnLink": "https://t904-rest.javelinaweb.com/rest/claim/claims/Claimnumber/217-0000000334-00",
      "Product": "MM",
      "ITSClaim": "0",
      "Providertaxid": "343111111",
      "Patientfirstname": "Larry",
      "Patientlastname": "Madison",
      "PatientCertNum": "TTC30065",
      "ChangedDate": "2017-07-12",
      "TotCharge": 198.0,
      "TotPaid": 0.0,
      "Claimstatus": "EXC",
      "IncurredDate": "2017-03-10",
      "ReceivedDate": "2017-04-06",
      "PrimaryICD": "J44.9",
      "Icdversion": "0",
      "BlkOfBusID": "MG500",
      "ClientID": "HIPAA",
      "Providerofficename": "WMG FACILITY"
  },
  {
      "Claimnumber": "217-0000000331-00",
      "ClaimnLink": "https://t904-rest.javelinaweb.com/rest/claim/claims/Claimnumber/217-0000000331-00",
      "Product": "MM",
      "ITSClaim": "0",
      "Providertaxid": "343111111",
      "Patientfirstname": "Larry",
      "Patientlastname": "Madison",
      "PatientCertNum": "TTC30065",
      "ChangedDate": "2017-07-12",
      "TotCharge": 257.0,
      "TotPaid": 0.0,
      "Claimstatus": "EXC",
      "IncurredDate": "2017-03-07",
      "ReceivedDate": "2017-04-06",
      "PrimaryICD": "M48.06",
      "Icdversion": "0",
      "BlkOfBusID": "MG500",
      "ClientID": "HIPAA",
      "Providerofficename": "WMG FACILITY"
  },
  {
      "Claimnumber": "217-0000000329-00",
      "ClaimnLink": "https://t904-rest.javelinaweb.com/rest/claim/claims/Claimnumber/217-0000000329-00",
      "Product": "MM",
      "ITSClaim": "0",
      "Providertaxid": "343111111",
      "Patientfirstname": "Larry",
      "Patientlastname": "Madison",
      "PatientCertNum": "TTC30065",
      "ChangedDate": "2017-07-12",
      "TotCharge": 315.0,
      "TotPaid": 0.0,
      "Claimstatus": "EXC",
      "IncurredDate": "2017-02-06",
      "ReceivedDate": "2017-04-06",
      "PrimaryICD": "H25.12",
      "Icdversion": "0",
      "BlkOfBusID": "MG500",
      "ClientID": "HIPAA",
      "Providerofficename": "WMG FACILITY"
  }
];

var NORMIE_OFFSET = 1;

var TOP_LEVEL_DIV_NAMES= {
  "visitorDetails": "details-title",
  "claims":"claims-title"
}

var REMOVAL_IDENTIFIER = "remove";

var KEY_SWAP_OBJECT = {
  "TotCopay":"Copay Amount",
  "TotDeduct":"Deductible",
  "TotCoins":"Coinsurance",
  "BirthDate":"Birthdate",
  "Claimnumber": "Claim Number",
  "Providertaxid": "Tax ID #",
  "PatientCertNum": "Certification Number",
  "ReceivedDate" :"Date Received",
  "ChangedDate": "Date Updated",
  "Claimstatus": "Status of Claim",
  "EmployeeID":REMOVAL_IDENTIFIER,
  "EmployeeLink":REMOVAL_IDENTIFIER,
  "DepSequenceNumber":REMOVAL_IDENTIFIER,
  "BlkOfBusID":REMOVAL_IDENTIFIER,
  "BlkOfBusLink":REMOVAL_IDENTIFIER,
  "BobName":"Business Name",
  "ClientID":"Client ID",
  "ClientLink":REMOVAL_IDENTIFIER,
  "ClientName":"Client Name",
  "EmployeeFirstName":REMOVAL_IDENTIFIER,
  "EmployeeLastName":REMOVAL_IDENTIFIER,
  "EmployeeCertNum":"Employee's Certification Number",
  "PatientFirstName":"Member First Name",
  "PatientLastName":"Member Last Name",
  "CertificateNumber":"Certificate Number",
  "Patientfirstname": REMOVAL_IDENTIFIER,
  "Patientlastname": REMOVAL_IDENTIFIER,
  "Product":REMOVAL_IDENTIFIER,
  "Icdversion":REMOVAL_IDENTIFIER,
  "PrimaryICD":REMOVAL_IDENTIFIER,
  "IncurredDate":REMOVAL_IDENTIFIER,
  "ClaimnLink":REMOVAL_IDENTIFIER,
  "ITSClaim":REMOVAL_IDENTIFIER,
  "BusID":REMOVAL_IDENTIFIER,
  "ClientID":REMOVAL_IDENTIFIER,
  "Providerofficename":REMOVAL_IDENTIFIER,
  "TotPaid":"Paid Amount",
  "TotCharge": "Charged Amount"
}

function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

function makeClickable(elementId) {
  var $element = $("#"+elementId);
  $element.click(function(e) {
  	$(this).siblings().slideToggle();
    e.preventDefault();
  });
 } 

 function createDiv(dataObject, keyString, valueString, parentId) {
  var displayKey = keyString;
  
  if (keyString in KEY_SWAP_OBJECT) {
    if (KEY_SWAP_OBJECT[keyString] == REMOVAL_IDENTIFIER) {
      return;
    } else {
    displayKey = KEY_SWAP_OBJECT[keyString];
    console.log("changed " + keyString + " to " + displayKey);
    }
  }
  var div = document.createElement("div");
  var descriptionTerm = document.createElement("dt");
  var descriptionTermId = "dtID" + keyString;
  descriptionTerm.id = descriptionTermId
  if (Number.isInteger(keyString)) {
  	descriptionTerm.innerHTML = keyString + NORMIE_OFFSET;
  } else {
  	descriptionTerm.innerHTML = displayKey;
  }
  div.appendChild(descriptionTerm);

  if (typeof dataObject[keyString] === 'object')  {
    if (isEmpty(dataObject[keyString])) {
      document.getElementById(parentId).appendChild(div);   
      return;
    } else {
      div.classList.add("object-div");

      var childObject = dataObject[keyString];
      for (var key in childObject) {
        document.getElementById(parentId).appendChild(div); 
        createDiv(childObject, key, childObject[key], descriptionTermId);
      }
    }
  } else {
    var descriptionDeets = document.createElement("dd");
    descriptionDeets.id = "ddID" + valueString;
    descriptionDeets.innerHTML = valueString;
    descriptionDeets.setAttribute("contenteditable", "true");
    descriptionDeets.setAttribute("spellcheck", "false");
    div.appendChild(descriptionDeets);
    document.getElementById(parentId).appendChild(div);   
  }
}

// get the current selected visitor information and render it.
function getCurrentChatVisitor() {    
    Comm100AgentConsoleAPI.get('agentconsole.currentChat.visitor').then(function(visitor){
        if (visitor.data) {
            var visitorData = visitor.data;

            $.ajax({
                url: SERVER_URL + CUSTOMER_INFO,
                type: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                data: JSON.stringify(visitorData),
                success: function(result) {
                    result = JSON.parse(result);
                    var data = result.MemberDetails[0];
                    for (var key in data) {
                        createDiv(data, key, data[key], "details-content-div");
                      }
                },
                error: function(error) {
                    console.log("ERROR");
                    console.log(error);
                }
            });

            $.ajax({
              url: SERVER_URL + CLAIM_INFO,
              type: "POST",
              headers: {
                  "Content-Type":"application/json"
              },
              data: JSON.stringify(visitorData),
              success: function(result) {
                  console.log("Claim Info");
                  console.log(result);
                  for (var i=0; i<result.length; i++) {
                      createDiv(result, i, result[i], "claims-content-div");
                    }

              },
              error: function(error) {
                  console.log("ERROR");
                  console.log(error);
              }
          });  
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
  
  makeClickable(TOP_LEVEL_DIV_NAMES.visitorDetails);
  makeClickable("claims-title");

  $(".container").hide();

  Comm100AgentConsoleAPI.onReady(function(){
      Comm100AgentConsoleAPI.init();
      console.log("Chat should start");

      Comm100AgentConsoleAPI.on('agentconsole.chats.chatStarted', function(chat) {
          console.log("Chat has started");
          getCurrentChatVisitor();
          

          Comm100AgentConsoleAPI.get('agentconsole.currentChat').then(function(chat){
              console.log("CHAT");
              console.log(chat);
              // document.getElementById('test-me').innerText = chat.requestTime;
          });
      });

      /** @param {object(chat)} chat **/
      Comm100AgentConsoleAPI.on('agentconsole.currentChat.selectChange', function(args) {
        $("#details-content-div").empty();
        $("#claims-content-div").empty();
        getCurrentChatVisitor();
      });
  
  });

});

