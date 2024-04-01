let authCheck = () => {
    console.log("Auth checked");
}

let controller = {
    methodOne() {
        console.log("Method one called");
    },
    methodTwo() {
        console.log("Method two called");
    },
    methodThree() {
        console.log("Method three called");
    },
    methodFour() {
        console.log("Method four called");
    },
    methodFive() {
        console.log("Method five called");
    }
}

function securityAOP(controller) {
    for (let props in controller) {
        if (typeof controller[props] === 'function') {
            let originalMethod = controller[props];
            controller[props] = function () {
                authCheck();
                originalMethod();
            }
        }
    }
}

securityAOP(controller);
controller.methodOne();
controller.methodTwo();
controller.methodThree();
controller.methodFour();
controller.methodFive();