var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateFee(dayslate) {
            return dayslate * 0.25;
        }
        Fees.calculateFee = calculateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBoxAllowed(age) {
        return age < 13 ? 3 : 10;
    }
    Utility.maxBoxAllowed = maxBoxAllowed;
    function privatFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
