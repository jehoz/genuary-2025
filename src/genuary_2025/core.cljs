(ns genuary-2025.core
  (:require [genuary-2025.day01 :as day-01]
            [genuary-2025.day02 :as day-02]))

(defn ^:export run-all []
  (day-01/run-sketch)
  (day-02/run-sketch))
