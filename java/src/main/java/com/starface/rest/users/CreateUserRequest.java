package com.starface.rest.users;

public class CreateUserRequest {
    private String email;
    private String familyName;
    private String firstName;
    private String id;
    private String language;
    private String login;
    private String namespace;
    private String faxCallerId;
    private String password;
    private boolean faxCoverPage;
    private boolean faxEmailJournal;
    private boolean missedCallReport;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getNamespace() {
        return namespace;
    }

    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }

    public String getFaxCallerId() {
        return faxCallerId;
    }

    public void setFaxCallerId(String faxCallerId) {
        this.faxCallerId = faxCallerId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isFaxCoverPage() {
        return faxCoverPage;
    }

    public void setFaxCoverPage(boolean faxCoverPage) {
        this.faxCoverPage = faxCoverPage;
    }

    public boolean isFaxEmailJournal() {
        return faxEmailJournal;
    }

    public void setFaxEmailJournal(boolean faxEmailJournal) {
        this.faxEmailJournal = faxEmailJournal;
    }

    public boolean isMissedCallReport() {
        return missedCallReport;
    }

    public void setMissedCallReport(boolean missedCallReport) {
        this.missedCallReport = missedCallReport;
    }

    @Override
    public String toString() {
        return "CreateUserRequest{" +
                "email='" + email + '\'' +
                ", familyName='" + familyName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", id='" + id + '\'' +
                ", language='" + language + '\'' +
                ", login='" + login + '\'' +
                ", namespace='" + namespace + '\'' +
                ", faxCallerId='" + faxCallerId + '\'' +
                ", faxCoverPage=" + faxCoverPage +
                ", faxEmailJournal=" + faxEmailJournal +
                ", missedCallReport=" + missedCallReport +
                '}';
    }
}
