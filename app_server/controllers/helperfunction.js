/**
 * Created by lukas on 23.04.2016.
 */
var sendJsonResponse  = function(res, status, content){
    res.status(status);
    res.json(content);
}