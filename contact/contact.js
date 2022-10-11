function validationName() {
    let contactName = document.getElementById('contactName');
    //特殊文字のサニタイジング
    let nameTmp = contactName.value;
    //エスケープ処理
    contactName.value = escapeHTML(contactName.value);
    if (nameTmp != contactName.value) {
        document.getElementById('contactNameMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('contactNameMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(contactName, 'contactNameMsg');
}

function validationTel() {
    let contactTel = document.getElementById('contactTel');
    //特殊文字のサニタイジング
    let nameTmp = contactTel.value;
    //エスケープ処理
    contactTel.value = escapeHTML(contactTel.value);
    if (nameTmp != contactTel.value) {
        document.getElementById('contactTelMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('contactTelMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(contactTel, 'contactTelMsg');
    // 電話番号形式チェック
    phoneChk(contactTel, 'contactTelMsg');
}

function validationMail() {
    let contactMail = document.getElementById('contactMail');
    //特殊文字のサニタイジング
    let nameTmp = contactMail.value;
    //エスケープ処理
    contactMail.value = escapeHTML(contactMail.value);
    if (nameTmp != contactMail.value) {
        document.getElementById('contactMailMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('contactMailMsg').innerHTML = '';
    }
    // 必須チェック
    mandatoryChk(contactMail, 'contactMailMsg');
    //メアドチェック
    addressChk(contactMail, 'contactMailMsg');

}

function validationText() {
    let contactText = document.getElementById('contactText');
    //特殊文字のサニタイジング
    let nameTmp = contactText.value;
    //エスケープ処理
    contactText.value = escapeHTML(contactText.value);
    if (nameTmp != contactText.value) {
        document.getElementById('contactTextMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('contactTextMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(contactText, 'contactTextMsg');
}
//エスケープ処理
function escapeHTML(string) {
    return string.replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#x27');
}

// 必須チェック
function mandatoryChk(mandatory, id) {
    if (mandatory.value == '') {
        document.getElementById(id).innerHTML = '※必須項目が入力されていません。';
    } else {
        document.getElementById(id).innerHTML = '';
    }
}

// メアドチェック
function addressChk(address, id) {
    let reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
    if (reg.test(address.value)) {
        document.getElementById(id).innerHTML = '';
    } else {
        document.getElementById(id).innerHTML = '※適切な形式で入力してください。';
    }
}

// 電話番号チェック
function phoneChk(num, id) {
    num = num.value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi, '');
    if (!num.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
        document.getElementById(id).innerHTML = '※XXX-XXXX-XXXXの形式で入力してください。';
    } else {
        document.getElementById(id).innerHTML = '';
    }
}