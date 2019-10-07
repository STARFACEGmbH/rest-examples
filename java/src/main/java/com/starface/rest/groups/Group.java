package com.starface.rest.groups;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Group {
    private int id;
    private String name;
    private Boolean chatGroup = true;
    private Boolean voicemail = true;
    private String groupId = null;
    private List<AssignableNumber> assignableNumbers = new ArrayList<>();
    private List<AssignableUser> assignableUsers = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getChatGroup() {
        return chatGroup;
    }

    public void setChatGroup(Boolean chatGroup) {
        this.chatGroup = chatGroup;
    }

    public Boolean getVoicemail() {
        return voicemail;
    }

    public void setVoicemail(Boolean voicemail) {
        this.voicemail = voicemail;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public List<AssignableNumber> getAssignableNumbers() {
        return assignableNumbers;
    }

    public void setAssignableNumbers(List<AssignableNumber> assignableNumbers) {
        this.assignableNumbers = assignableNumbers;
    }

    public List<AssignableUser> getAssignableUsers() {
        return assignableUsers;
    }

    public void setAssignableUsers(List<AssignableUser> assignableUsers) {
        this.assignableUsers = assignableUsers;
    }
}
