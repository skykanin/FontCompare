(ns font-api.routes.core
  (:require
   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :refer [not-found]]
   [font-api.routes.list :refer [get-list]]
   [font-api.routes.vote :refer [create-vote register-vote]]
   [font-api.routes.util :refer [error-handler-rep]]
   [ring.middleware.cors :refer [wrap-cors]]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]))

(defroutes app-routes
  "Define all the routes and their respective route handlers"
  (GET "/list" [] (wrap-json-response get-list))
  (GET "/vote/create" [] (wrap-json-response create-vote))
  (POST "/vote/register" [] (wrap-json-response
                             (wrap-json-body
                              register-vote
                              {:keywords? true :bigdecimals? true})))
  (not-found (wrap-json-response (constantly (error-handler-rep 404 "Could not find route")))))

(def routes-with-cors
  (wrap-cors
   app-routes
   :access-control-allow-origin [#".*"]
   :access-control-allow-methods
   [:delete :get :patch :post :put]
   :access-control-allow-headers
   #{"accept"
     "accept-encoding"
     "accept-language"
     "authorization"
     "content-type"
     "origin"}))
