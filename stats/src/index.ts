import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithConsoleReport("Man United");
summary.buildAndPrintReport(matchReader.matches);

const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man United");
htmlSummary.buildAndPrintReport(matchReader.matches);
