(ns font-api.routes.util)

(defn error-handler-rep
  "HTTP error response template function"
  [status msg]
  {:status  status
   :headers {"Content-Type" "application/json"}
   :body    {"Error" msg}})
