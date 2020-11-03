function calcular() {
        div_parcela1.innerHTML = '';
        div_parcela2.innerHTML = '';
        const juros = (100+1.5)/100;
        var total = Number(in_financiamento.value);
        var qtparcelas = Number(in_qtparcelas.value);
        var parcela = total/qtparcelas;
        var prestacao = 1;

        if (total < 1000 || total == "" ) {
            alert('Valor total inválido! Insira um valor maior ou igual a R$ 1.000,00!');
        } else if (qtparcelas < 6 || qtparcelas == "" ) {
            alert('Parcelas inválidas! Insira parcelas maior ou igua a 6!');
        } else if (qtparcelas <=10){
            while (prestacao <= 10) {
                div_parcela1.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                prestacao++;
                parcela *= juros;
            }

        } else {
            while (prestacao <= 10) {
                div_parcela1.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                prestacao++;
                parcela *= juros;
            }
            while (prestacao <= 20) {
                div_parcela2.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                prestacao++;
                parcela *= juros;
            }
        }
    }