(ns font-api.core
  (:require
   [font-api.routes.core :refer [routes-with-cors]]
   [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn -main
  [& args]
  (run-jetty routes-with-cors {:port (Integer/valueOf (or (System/getenv "port") "4000"))}))
