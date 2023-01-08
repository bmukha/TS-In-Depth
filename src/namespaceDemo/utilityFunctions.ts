namespace Utility {
    export namespace Fees {
        export function calculateFee(dayslate: number): number {
            return dayslate * 0.25;
        }
    }
    export function maxBoxAllowed(age: number): number {
        return age < 13 ? 3 : 10;
    }
    function privatFunc(): void {
        console.log('This is a private function');
    }
}
