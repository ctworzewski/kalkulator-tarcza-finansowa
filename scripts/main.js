let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let prevYear = document.querySelector('.revenuesFirst').value;
    let prevMonth = document.querySelector('.revenuesPrev').value;
    let currentMonth = document.querySelector('.revenuesCurrently').value;
    console.log('Przycisk działa');
    console.log(prevMonth);

    let spadekProc = spadekProcentowy(prevMonth, currentMonth);
    let procentSubwencji = procentSubwencja(spadekProc);
    let kwotaSub = kwotaSubwencji(prevYear, procentSubwencji);

    console.log(spadekProc)
    console.log(procentSubwencji)
    console.log(kwotaSub)

    let spadekPrzychodu = document.querySelector('.wartoscSpadekPrzychodu');
    spadekPrzychodu.textContent = spadekProc * 100;

    let kwotaS = document.querySelector('.kwotaSubwencji');
    kwotaS.textContent = kwotaSub;
})

function spadekProcentowy(prev, current) {
    let spadekProcentowy = (prev - current) / prev;
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

function kwotaSubwencji(year, procent) {
    let kwotaSubwencji = year * procent;
    let maxKwotaSubwencji = 3500000;

    if (kwotaSubwencji > maxKwotaSubwencji) {
        return maxKwotaSubwencji;
    }
    return kwotaSubwencji;
}