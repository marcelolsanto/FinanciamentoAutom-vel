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
            limpar()
        } else if (qtparcelas < 6 || qtparcelas == "" ) {
            alert('Parcelas inválidas! Insira parcelas maiores ou igual a 6!');
            limpar()
        } else if (qtparcelas > 20 ) {
            alert('Parcelas inválidas! Insira parcelas menores ou igual a 20!');
            limpar()
        } else if (qtparcelas >= 6 && qtparcelas <= 10 ){
            while (prestacao <= qtparcelas) {
                div_parcela1.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                limpar()
                prestacao++;
                parcela *= juros;
            }
        } else {
            while (qtparcelas <= 20 && prestacao <= 10 ) {
                div_parcela1.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                limpar()
                prestacao++;
                parcela *= juros;
            }
            while (qtparcelas <= 20 && prestacao <= qtparcelas) {
                div_parcela2.innerHTML += `Parcela ${prestacao}: R$${parcela.toFixed(2)}<br>`;
                limpar()
                prestacao++;
                parcela *= juros;
            }
        }
}
function limpar() {
    in_financiamento.value = '';
    in_qtparcelas.value = '';
}