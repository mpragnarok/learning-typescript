"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithConsoleReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
htmlSummary.buildAndPrintReport(matchReader.matches);
