(defproject font-api "0.1.0-SNAPSHOT"
  :description "Font API"
  :url "http://example.com/FIXME"
  :license {:name "GPL-3.0-or-later"
            :url "https://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring "1.9.3"]
                 [ring/ring-json "0.5.1"]
                 [ring-cors "0.1.13"]
                 [compojure "1.6.2"]]
  :repl-options {:init-ns font-api.core}
  :main font-api.core
  :profiles {:uberjar {:aot :all :main font-api.core}})
