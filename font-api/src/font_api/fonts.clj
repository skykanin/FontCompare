(ns font-api.fonts)

;; Initial list of fonts with zero votes
(def font-list
  (atom
   [{:id 1 :font-name "Odibee Sans" :votes 0}
    {:id 2 :font-name "Limelight" :votes 0}
    {:id 3 :font-name "Caveat" :votes 0}
    {:id 4 :font-name "Condiment" :votes 0}
    {:id 5 :font-name "Flavors" :votes 0}
    {:id 6 :font-name "Libre Baskerville" :votes 0}
    {:id 7 :font-name "Pattaya" :votes 0}
    {:id 8 :font-name "Sigmar One" :votes 0}
    {:id 9 :font-name "Snowburst One" :votes 0}
    {:id 10 :font-name "ZCOOL KuaiLe" :votes 0}]))
