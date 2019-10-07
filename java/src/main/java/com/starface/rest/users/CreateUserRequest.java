package com.starface.rest.users;

public class CreateUserRequest {
    private String email;
    private String familyName;
    private String firstName;
    private String language;
    private String login;
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
}
