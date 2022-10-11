function validationName() {
    let recruitName = document.getElementById('recruitName');
    //特殊文字のサニタイジング
    let nameTmp = recruitName.value;
    //エスケープ処理
    recruitName.value = escapeHTML(recruitName.value);
    if (nameTmp != recruitName.value) {
        document.getElementById('recruitNameMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('recruitNameMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(recruitName, 'recruitNameMsg');
}

function validationTel() {
    let recruitTel = document.getElementById('recruitTel');
    //特殊文字のサニタイジング
    let nameTmp = recruitTel.value;
    //エスケープ処理
    recruitTel.value = escapeHTML(recruitTel.value);
    if (nameTmp != recruitTel.value) {
        document.getElementById('recruitTelMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('recruitTelMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(recruitTel, 'recruitTelMsg');
    // 電話番号形式チェック
    phoneChk(recruitTel, 'recruitTelMsg');
}

function validationMail() {
    let recruitMail = document.getElementById('recruitMail');
    //特殊文字のサニタイジング
    let nameTmp = recruitMail.value;
    //エスケープ処理
    recruitMail.value = escapeHTML(recruitMail.value);
    if (nameTmp != recruitMail.value) {
        document.getElementById('recruitMailMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('recruitMailMsg').innerHTML = '';
    }
    // 必須チェック
    mandatoryChk(recruitMail, 'recruitMailMsg');
    //メアドチェック
    addressChk(recruitMail, 'recruitMailMsg');

}

function validationText() {
    let recruitText = document.getElementById('recruitText');
    //特殊文字のサニタイジング
    let nameTmp = recruitText.value;
    //エスケープ処理
    recruitText.value = escapeHTML(recruitText.value);
    if (nameTmp != recruitText.value) {
        document.getElementById('recruitTextMsg').innerHTML = '※特殊文字は入力不可です。';
    } else {
        document.getElementById('recruitTextMsg').innerHTML = '';
    }

    // 必須チェック
    mandatoryChk(recruitText, 'recruitTextMsg');
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