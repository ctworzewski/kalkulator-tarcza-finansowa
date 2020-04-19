let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let poprzedniRok = document.querySelector('.przychodPoprzedniRok').value;
    let poprzedniMiesiac = document.querySelector('.przychodPoprzedniMiesiac').value;
    let obecnyMiesiac = document.querySelector('.przychodObecnyMiesiac').value;
    console.log('Przycisk działa');
    console.log(poprzedniMiesiac);

    let spadekProc = spadekProcentowy(poprzedniMiesiac, obecnyMiesiac);
    let procentSubwencji = procentSubwencja(spadekProc);
    let kwotaSub = kwotaSubwencji(poprzedniRok, procentSubwencji);

    console.log(spadekProc)
    console.log(procentSubwencji)
    console.log(kwotaSub)

    let spadekPrzychodu = document.querySelector('.wartoscSpadekPrzychodu');
    spadekPrzychodu.textContent = spadekProc * 100;

    let kwotaS = document.querySelector('.kwotaSubwencji');
    kwotaS.textContent = kwotaSub;
})

function spadekProcentowy(poprzedni, obecny) {
    let spadekProcentowy = (poprzedni - obecny) / poprzedni;
    return spadekProcentowy;
}

function procentSubwencja(spadek) {
    if (spadek <= 0.25) {
        return 0;
    } else if (spadek > 0.25 && spadek <= 0.5) {
        return 0.04;
    } else if (spadek > 0.5 && spadek <= 0.75) {
        return 0.06;
    } else if (spadek > 0.75 && spadek <= 1) {
        return 0.08;
    }
}

function kwotaSubwencji(rok, procent) {
    let kwotaSubwencji = rok * procent;
    let maxKwotaSubwencji = 3500000;

    if (kwotaSubwencji > maxKwotaSubwencji) {
        return maxKwotaSubwencji;
    }
    return kwotaSubwencji;
}