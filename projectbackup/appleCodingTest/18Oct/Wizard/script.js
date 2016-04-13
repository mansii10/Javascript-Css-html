function nextWizard(){
    if(document.getElementById('btnNext').name == 'Step2')
    {
        document.getElementById('btnNext').name = 'Step3';
        document.getElementById('btnPrevious').name = 'Step1';
        document.getElementById('btnPrevious').disabled = '';
        document.getElementById('Step1').style.display = 'none';
        document.getElementById('Step2').style.display = '';
        document.getElementById('trStep2').style.backgroundColor = 'blue';
        document.getElementById('trStep1').style.backgroundColor = 'Silver';
    }
    else if(document.getElementById('btnNext').name =='Step3')
    {
        document.getElementById('btnNext').name ='Step4';
        document.getElementById('btnPrevious').name ='Step2';
        document.getElementById('Step2').style.display = 'none';
        document.getElementById('Step3').style.display = '';
        document.getElementById('trStep3').style.backgroundColor = 'blue';
        document.getElementById('trStep2').style.backgroundColor = 'Silver';
    }
    else if(document.getElementById('btnNext').name=='Step4')

    {
        document.getElementById('btnNext').name ='Step5';
        document.getElementById('btnPrevious').name  ='Step3';
        document.getElementById('Step3').style.display = 'none';
        document.getElementById('Step4').style.display = '';
        document.getElementById('trStep4').style.backgroundColor = 'blue';
        document.getElementById('trStep3').style.backgroundColor = 'Silver';
    }
    else if(document.getElementById('btnNext').name =='Step5'){
        document.getElementById('btnNext').name ='';
        document.getElementById('btnPrevious').name  ='Step4';
        document.getElementById('btnNext').disabled = 'disabled';
        document.getElementById('btnLast').disabled = '';
        document.getElementById('Step4').style.display = 'none';
        document.getElementById('Step5').style.display = '';
        document.getElementById('trStep5').style.backgroundColor = 'blue';
        document.getElementById('trStep4').style.backgroundColor = 'Silver';
        summaryLoad();
    }
}

function previousWizard(){
    if(document.getElementById('btnPrevious').name =='Step1'){
        document.getElementById('btnNext').name='Step2';
        document.getElementById('btnPrevious').name = '';
        document.getElementById('btnPrevious').disabled = 'disabled';
        document.getElementById('Step2').style.display = 'none';
        document.getElementById('Step1').style.display = '';
        document.getElementById('trStep1').style.backgroundColor = 'blue';
        document.getElementById('trStep2').style.backgroundColor = 'Silver';
    }
    else if(document.getElementById('btnPrevious').name =='Step2'){
        document.getElementById('btnNext').name='Step3';
        document.getElementById('btnPrevious').name ='Step1';
        document.getElementById('Step3').style.display = 'none';
        document.getElementById('Step2').style.display = '';
        document.getElementById('trStep2').style.backgroundColor = 'blue';
        document.getElementById('trStep3').style.backgroundColor = 'Silver';
    }
    else if(document.getElementById('btnPrevious').name =='Step3'){
        document.getElementById('btnNext').name='Step4';
        document.getElementById('btnPrevious').name ='Step2';
        document.getElementById('Step4').style.display = 'none';
        document.getElementById('Step3').style.display = '';
        document.getElementById('trStep3').style.backgroundColor = 'blue';
        document.getElementById('trStep4').style.backgroundColor = 'Silver';
    }

    else if (document.getElementById('btnPrevious').name == 'Step4'){
        document.getElementById('btnNext').name = 'Step5';
        document.getElementById('btnPrevious').name = 'Step3';
        document.getElementById('btnNext').disabled = '';
        document.getElementById('btnLast').disabled = 'disabled';
        document.getElementById('Step5').style.display = 'none';
        document.getElementById('Step4').style.display = '';
        document.getElementById('trStep4').style.backgroundColor = 'blue';
        document.getElementById('trStep5').style.backgroundColor = 'Silver';
    }
}

function summaryLoad(){
    document.getElementById('reviewUserName').innerHTML = document.getElementById('usrName').value;
    document.getElementById('reviewPassword').innerHTML = document.getElementById('fstName').value;
    document.getElementById('reviewFirstName').innerHTML = document.getElementById('lstName').value;
    document.getElementById('reviewLastName').innerHTML = document.getElementById('mailId').value;
    if (document.getElementById('ckBoxOne').checked == 1){
        document.getElementById('reviewFirstMnt').innerHTML = 'Yes';
    }
    else
    {
        document.getElementById('reviewFirstMnt').innerHTML = 'No';
    }
    if (document.getElementById('ckBoxTwo').checked == 1)
    {
        document.getElementById('reviewSecondMnt').innerHTML = 'Yes';
    }
    else
    {
        document.getElementById('reviewSecondMnt').innerHTML = 'No';
    }
    if (document.getElementById('ckBoxThree').checked == 1)
    {
        document.getElementById('reviewThirdMnt').innerHTML = 'Yes';
    }
    else
    {
        document.getElementById('reviewThirdMnt').innerHTML = 'No';
    }
    if (document.getElementById('ckBoxFour').checked == 1)
    {
        document.getElementById('reviewFourthMnt').innerHTML = 'Yes';
    }
    else
    {
        document.getElementById('reviewFourthMnt').innerHTML = 'No';
    }
    var iCounter = 1;
    var iCharacterCount = document.getElementById('txtPass').value.length;
    var passwordMasked = '';
    for (iCounter = 1; iCounter <= iCharacterCount; iCounter++)
    {
        passwordMasked = passwordMasked + '*';
    }
    document.getElementById('reviewPassword').innerHTML = passwordMasked;

    if(isPremium()){
        document.getElementById('custType').innerHTML = "premium";
        document.getElementById('custType').style.color="red";
    }
    else
    {
        document.getElementById('custType').innerHTML = "standard";
        document.getElementById('custType').style.color="blue";
    }
}

function isPremium(){
    var ckCount = 0;
    var applicableCkBoxes = ["ckBoxOne","ckBoxTwo","ckBoxThree","ckBoxFour"];
    for(var i = 0; i < applicableCkBoxes.length; i++){
        if (document.getElementById(applicableCkBoxes[i]).checked == 1){
            ckCount++
        }
    }
    if(ckCount >= 4){
        return true;
    }
    return false;
}