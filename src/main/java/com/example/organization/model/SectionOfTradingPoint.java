package com.example.organization.model;

import javax.persistence.*;

@Entity
@Table(name = "sectionOfTradingPoint")
public class SectionOfTradingPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "trading_point_id")
    private TradingPoint tradingPoint;
    @ManyToOne
    @JoinColumn(name = "section_id")
    private Section section;
    @Column(name = "number_of_halls")
    private int numberOfHalls;

    public SectionOfTradingPoint(TradingPoint tradingPoint, Section section, int numberOfHalls) {
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
