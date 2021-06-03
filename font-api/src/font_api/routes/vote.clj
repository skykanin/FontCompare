(ns font-api.routes.vote
  (:require [font-api.fonts :refer [font-list]]))

(defn- select-two
  "Select two unique fonts randomly"
  [elems]
  (let [length (count elems)
        x (rand-int length)
        y (rand-int length)
        font-x (get elems x)
        font-y (get elems y)]
    (if (not= (:id font-x) (:id font-y))
      [font-x font-y]
      (select-two elems))))

(defn create-vote
  "Create a vote by selecting two fonts"
  [_]
  {:status 200
   :headers {"Content Type" "application/json"}
   :body (select-two @font-list)})

(defn- font-index [id fonts]
  (let [[font & _] (filter #(= id (:id %)) fonts)]
    (.indexOf fonts font)))

(defn update-font-vote [id fonts]
  (let [idx (font-index id fonts)]
    (update-in fonts [idx :votes] inc)))

(defn register-vote
  "Register the results of a vote"
  [{font :body}]
  (swap! font-list (fn [fonts] (update-font-vote (:id font) fonts)))
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body {:status "Vote tally updated"}})
