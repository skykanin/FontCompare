(ns font-api.routes.list
  (:require [font-api.fonts :refer [font-list]]))

(defn get-list [_]
  {:status 200
   :headers {"Content Type" "application/json"}
   :body @font-list})
