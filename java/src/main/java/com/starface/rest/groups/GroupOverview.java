package com.starface.rest.groups;


public class GroupOverview {

    private int id;
    private String groupname;
    private String groupexternalnumber;
    private String groupinternalnumber;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }

    public String getGroupexternalnumber() {
        return groupexternalnumber;
    }

    public void setGroupexternalnumber(String groupexternalnumber) {
        this.groupexternalnumber = groupexternalnumber;
    }

    public String getGroupinternalnumber() {
        return groupinternalnumber;
    }

    public void setGroupinternalnumber(String groupinternalnumber) {
        this.groupinternalnumber = groupinternalnumber;
    }

    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", groupname='" + groupname + '\'' +
                ", groupexternalnumber='" + groupexternalnumber + '\'' +
                ", groupinternalnumber='" + groupinternalnumber + '\'' +
                '}';
    }
}
