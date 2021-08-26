var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(noOfStocks.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {

    

    if (initial > 0 && current > 0 && quantity > 0) //no stock can ever have a initial price or current price as zero so >0 can be done here instead of writing a whole pls fill all the fields message
    {
        if (initial > current) {
            var loss = ((initial - current) * quantity).toFixed(2);
            var lossPercentage = ((loss / initial)* 100).toFixed(2);
            // var l = loss.toFixed(2);
            // var los = lossPercentage.toFixed(2);
           
            showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage}%`)
            if(lossPercentage>50)
            document.body.style.backgroundImage = "URL('images/stonksdown.jpg')"
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPositionX ="0rem";
            document.body.style.backgroundPositionY = "0rem";

        } else if (current > initial) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / initial) * 100;
                var p = profit.toFixed(2);
                var pro = profitPercentage.toFixed(2);
            
            showOutput(`The profit is ${p} and the profit percentage is ${pro}% !`)
            document.body.style.backgroundImage = "URL('images/stonksup.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPositionX ="0rem";
            document.body.style.backgroundPositionY = "0rem";
        } else if (current = initial) {
            showOutput("No loss, No gain")
            document.body.style.backgroundColor = "#ffffff";
        }
    } else {
        showOutput("please fill all the fields")
    }

}

submitBtn.addEventListener('click', submitHandler);

function showOutput(message) {
    outputBox.innerHTML = message;
}