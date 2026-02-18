package com.example.yarnfullstackdemo.Model;

public class Yarn {
    private String name;
    private String color;
    private double length;
    private boolean washable;

    public Yarn(String name, String color, double length, boolean washable) {
        this.name = name;
        this.color = color;
        this.length = length;
        this.washable = washable;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public boolean isWashable() {
        return washable;
    }

    public void setWashable(boolean washable) {
        this.washable = washable;
    }
}
