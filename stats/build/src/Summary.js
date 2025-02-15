"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    // Summary has the references to analyzer and outputTarget
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
