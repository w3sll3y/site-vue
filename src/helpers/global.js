const CPF_REGEX = /\b([\d\s]+)\b/ig;
const CNPJ_REGEX = /\b([\d\s]+)\b/ig;
const CLEAR_REGEX = /\D+/ig;

function getPlainValue(content, splitRegex) {
    content = content.split(splitRegex);
    content = content.filter(part => splitRegex.test(part) && part.replace(CLEAR_REGEX, '') != '')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    content = content.map(part => part.replace(CLEAR_REGEX, ''))
    
    if (content.length) {
        content = content[0];
        content = content.replace(CLEAR_REGEX, '')
        return content;
    }
    
    return '';
}

export const regexValidate = (value, flag) => {
    switch (flag) {
      case 'email':
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(value)
    }
}

export const cpfIsValid = content => {
    content = String(content).trim();

    content = getPlainValue(content, CPF_REGEX);

    return content && content.length === 11 && /^[0-9]{11}$/.test(content) && (function () {
        var strCPF = content, Soma, Resto;
        Soma = 0;
        if (strCPF == "00000000000") {
            return false;
        }

        for (let i=1; i<=9; i++) {
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        }
        
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        }  

        if (Resto != parseInt(strCPF.substring(9, 10)) ) {
            return false;
        } 

        Soma = 0;
        for (let i = 1; i <= 10; i++) {
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        }
        
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) {
            Resto = 0;
        }

        if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
            return false;
        } 
        return true;
    })();
}

export const cnpjIsValid = content => {
    content = String(content).trim();

    // filtrar valor de CNPJ da string
    content = getPlainValue(content, CNPJ_REGEX);

    return content && content.length === 14 && (function () {
        // creditos para => https://www.geradorcnpj.com/javascript-validar-cnpj.htm
        var cnpj = content;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = cnpj.length - 2
        var numeros = cnpj.substring(0,tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;
    })();
}

export const getPlainCpfAndCnpj = value => value.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')

/* validações para cartões */
export const nameCardIsValid = nameCard => nameCard && nameCard.split(' ').length > 1
export const numberCardIsValid = numberCard => numberCard && numberCard.length === 19
export const cvvCardIsValid = ccvCard => ccvCard && ccvCard.length === 3
export const monthDateCardIsValid = monthDate => monthDate && monthDate.length === 2
export const yearDateCardIsValid = yearDate => yearDate && yearDate.length === 4