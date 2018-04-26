package com.example.organization.model;

public class SectionOfTradingPoint {
    private int id;
    private TradingPoint tradingPoint;
    private Section section;
    private int numberOfHalls;

    public SectionOfTradingPoint(int id, TradingPoint tradingPoint,
                                 Section section, int numberOfHalls) {
        this.id = id;
        this.tradingPoint = tradingPoint;
        this.section = section;
        this.numberOfHalls = numberOfHalls;
    }

    public SectionOfTradingPoint() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public TradingPoint getTradingPoint() {
        return tradingPoint;
    }

    public void setTradingPoint(TradingPoint tradingPoint) {
        this.tradingPoint = tradingPoint;
    }

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }

    public int getNumberOfHalls() {
        return numberOfHalls;
    }

    public void setNumberOfHalls(int numberOfHalls) {
        this.numberOfHalls = numberOfHalls;
    }
}
